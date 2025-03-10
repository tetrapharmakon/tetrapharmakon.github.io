#!/usr/bin/env python3
"""
BibTeX to YAML converter for Jekyll publications with improved field handling
Usage: python bib_to_yaml.py input.bib > _data/publications.yml
"""

import sys
import re
import yaml
import argparse
from pybtex.database.input import bibtex

def clean_text(text):
    """Clean up text by removing extra spaces, braces, and LaTeX commands"""
    # Remove LaTeX commands
    text = re.sub(r'\\[a-zA-Z]+\{([^}]*)\}', r'\1', text)
    # Remove braces
    text = re.sub(r'\{|\}', '', text)
    # Handle special characters
    text = text.replace('\\&', '&')
    # Replace multiple spaces with single space
    text = re.sub(r'\s+', ' ', text)
    # Remove leading/trailing spaces
    return text.strip()

def extract_doi(text):
    """Extract DOI from a string if it exists"""
    # Look for common DOI patterns
    doi_match = re.search(r'10\.\d{4,}(?:\.\d+)*\/[a-zA-Z0-9.-]+', text)
    if doi_match:
        return doi_match.group(0)
    return None

def extract_url(text):
    """Extract URL from a string if it exists"""
    url_match = re.search(r'https?:\/\/[^\s]+', text)
    if url_match:
        return url_match.group(0)
    return None

def extract_arxiv(text):
    """Extract arXiv ID from a string if it exists"""
    arxiv_match = re.search(r'(arxiv:)?(\d{4}\.\d{4,5}|[a-z]+\/\d{7})(v\d+)?', text, re.IGNORECASE)
    if arxiv_match:
        return arxiv_match.group(2)
    return None

def parse_bibtex(bib_file):
    """Parse BibTeX file and convert to our YAML format"""
    parser = bibtex.Parser()
    bib_data = parser.parse_file(bib_file)
    
    entries = []
    
    for entry_key, entry in bib_data.entries.items():
        publication = {}
        
        # Title is mandatory
        if 'title' in entry.fields:
            publication['title'] = clean_text(entry.fields['title'])
        else:
            # Skip entries without title
            continue
        
        # Extract authors
        if entry.persons.get('author'):
            authors = []
            for person in entry.persons['author']:
                first = ' '.join(person.first_names)
                last = ' '.join(person.last_names)
                
                # Create full name from parts, handling different name formats
                if first and last:
                    authors.append(f"{first} {last}")
                elif last:
                    authors.append(last)
                    
            publication['authors'] = ', '.join(authors)
        
        # Venue (journal or booktitle or publisher)
        if 'journal' in entry.fields:
            publication['venue'] = clean_text(entry.fields['journal'])
        elif 'booktitle' in entry.fields:
            publication['venue'] = clean_text(entry.fields['booktitle'])
        elif 'publisher' in entry.fields:
            publication['venue'] = clean_text(entry.fields['publisher'])
            
        # Year
        if 'year' in entry.fields:
            try:
                publication['year'] = int(entry.fields['year'])
            except ValueError:
                publication['year'] = clean_text(entry.fields['year'])
        
        # DOI
        if 'doi' in entry.fields:
            publication['doi'] = clean_text(entry.fields['doi'])
        elif 'note' in entry.fields and 'doi' in entry.fields['note'].lower():
            extracted_doi = extract_doi(entry.fields['note'])
            if extracted_doi:
                publication['doi'] = extracted_doi
        
        # URL
        if 'url' in entry.fields:
            publication['url'] = clean_text(entry.fields['url'])
        elif 'note' in entry.fields and ('http://' in entry.fields['note'] or 'https://' in entry.fields['note']):
            extracted_url = extract_url(entry.fields['note'])
            if extracted_url:
                publication['url'] = extracted_url
        
        # ArXiv
        if 'eprint' in entry.fields and 'arxiv' in entry.fields.get('eprinttype', '').lower():
            publication['arxiv'] = clean_text(entry.fields['eprint'])
        elif 'note' in entry.fields and 'arxiv' in entry.fields['note'].lower():
            extracted_arxiv = extract_arxiv(entry.fields['note'])
            if extracted_arxiv:
                publication['arxiv'] = extracted_arxiv
                
        # Additional fields
        if 'volume' in entry.fields:
            publication['volume'] = clean_text(entry.fields['volume'])
            
        if 'number' in entry.fields:
            publication['number'] = clean_text(entry.fields['number'])
            
        if 'pages' in entry.fields:
            publication['pages'] = clean_text(entry.fields['pages'])
            
        if 'month' in entry.fields:
            publication['month'] = clean_text(entry.fields['month'])
        
        # Abstract
        if 'abstract' in entry.fields:
            publication['abstract'] = clean_text(entry.fields['abstract'])
        
        # Add keywords as tags if available
        if 'keywords' in entry.fields:
            keywords = clean_text(entry.fields['keywords'])
            publication['tags'] = [k.strip() for k in keywords.split(',')]
        
        entries.append(publication)
    
    # Sort by year (newest first)
    entries.sort(key=lambda x: x.get('year', 0), reverse=True)
    return entries

def main():
    parser = argparse.ArgumentParser(description='Convert BibTeX to YAML for Jekyll publications')
    parser.add_argument('bibtex_file', help='Input BibTeX file')
    parser.add_argument('-o', '--output', help='Output YAML file (defaults to stdout)')
    
    args = parser.parse_args()
    
    try:
        publications = parse_bibtex(args.bibtex_file)
        yaml_string = yaml.dump(publications, sort_keys=False, default_flow_style=False)
        
        if args.output:
            with open(args.output, 'w') as f:
                f.write(yaml_string)
        else:
            print(yaml_string)
            
    except Exception as e:
        sys.stderr.write(f"Error: {str(e)}\n")
        sys.exit(1)

if __name__ == "__main__":
    main()