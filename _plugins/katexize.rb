# _plugins/katexize.rb

require 'execjs'

# tried this as a filter:

#module Jekyll
#    module KaTeXize
#        def katexize(content)
#            content
#            @katex = ExecJS.compile(open("./js/katex.min.js").read)
#            content.gsub(/\$\$.*\$\$/) { |tex| @katex.call("katex.renderToString", tex[2..-3], { 'displayMode' => true })}
#            content.gsub(/\(\(.*\)\)/, 'LEL')
#        end
#    end
#end
#
#Liquid::Template.register_filter(Jekyll::KaTeXize)

# but it's better integrated as a pre-converter

#module Jekyll
#    class MyConverter < Converter
#        safe :false
#        priority :high
#
#        def matches(ext)
#            ext =~ /^\.(md|markdown)$/i
#        end
#
#        def output_ext(ext)
#            ".html"
#        end
#
#
#        def parse_display_math(content)
#            @katex = ExecJS.compile(open("./js/katex.min.js").read)
#            content = content.gsub(/\$\$.*?\$\$/) do |tex|
#                @katex.call("katex.renderToString", tex[2..-3], { 'displayMode' => true })
#            end
#        end
#
#        def parse_inline_math(content)
#            @katex = ExecJS.compile(open("./js/katex.min.js").read)
#            content = content.gsub(/\$\$.*?\$\$/) do |tex|
#                @katex.call("katex.renderToString", tex[2..-3], { 'displayMode' => true })
#            end
#        end
#
#        def convert(content)
#            # render latex math
#            parse_display_math(content)
#            parse_inline_math(content)
#            content = content.gsub(/\$.*?\$/) do |tex|
#                @katex.call("katex.renderToString", tex[1..-2])
#            end
#
#            # Now call the standard Markdown converter
#            site = Jekyll::Site.new(@config)
#            mkconverter = site.find_converter_instance(Jekyll::Converters::Markdown)
#            mkconverter.convert(content)
#        end
#    end
#end

# let's try out a generator

module KaTeXize

    class KaTeXize < Jekyll::Generator

        def generate(site)
            if site.config.has_key?("katexize") and !site.config["katexize"]
                return
            end
            site.documents.each { |p| substitute(p) }
        end

        private

        @@katex = ExecJS.compile(open("./js/katex.min.js").read)
        @@math_inline_delim_open = "$"
        @@math_inline_delim_close = "$"
        @@math_display_delim_open = "$$"
        @@math_display_delim_close = "$$"

        def parse_math(content, open, close, options={})
            content.gsub(/#{Regexp.quote(open)}.*?#{Regexp.quote(close)}/) do |tex|
                @@katex.call("katex.renderToString", tex[(open.length)..-(close.length+1)], options)
            end
        end

        def parse_inline_math(content)
            parse_math(content, open=@@math_inline_delim_open, close=@@math_inline_delim_close)
        end

        def parse_display_math(content)
            parse_math(content, open=@@math_display_delim_open, close=@@math_display_delim_close, { 'displayMode' => true })
        end

        def substitute(obj)
            obj.content = parse_display_math(obj.content)
            obj.content = parse_inline_math(obj.content)
            obj.data['title'] = parse_inline_math(obj.data['title'])
        end

    end
end


