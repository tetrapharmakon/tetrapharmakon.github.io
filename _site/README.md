# tetrapharmakon.github.io

## Is it building?

[![Build Status](https://travis-ci.org/tetrapharmakon/tetrapharmakon.github.io.svg?branch=jekyll)](https://travis-ci.org/tetrapharmakon/tetrapharmakon.github.io)

## Working locally

First you set up the work environment:

```sh
sudo apt-get install ruby ruby-devel
sudo gem install jekyll bundler
git clone -b jekyll https://github.com/tetrapharmakon/tetrapharmakon.github.io.git
cd tetrapharmakon.github.io
bundle install
```

Then you edit stuff after enabling a realtime preview on [localhost:4000](http://localhost:4000):

```sh
cd tetrapharmakon.github.io
bundle exec jekyll serve
```

After the deed is done, just add, commit and push. 

The folder `_data` contains `profile` and `friends`; the folders `_stuff` and `_projects` contain all the rest.