# tetrapharmakon.github.io

## First setup

Assuming you have installed [RVM](https://rvm.io/), the environment will be created when you check into the project dir.

```sh
sudo apt-get install nodejs # hopefully we'll remove this someday
git clone -b source https://github.com/tetrapharmakon/tetrapharmakon.github.io.git
cd tetrapharmakon.github.io
# install required Ruby version if RVM asks you to do so
gem install bundler --no-ri --no-rdoc
bundle install --jobs $(expr $(sysctl -n hw.ncpu) - 1)
```

Note: the weird options for `gem` skip docs installation, while the weird options for `bundle` parallelize the installation on all your CPU cores (minus one to avoid deadlocks).

## Working locally

To edit stuff with a live preview on [localhost:4000](http://localhost:4000):

```sh
cd tetrapharmakon.github.io
bundle exec jekyll serve
```

After the deed is done, just add, commit and push. 

## Folder structure

The folder `_data` contains `profile` and `friends`; the folders `_stuff` and `_projects` contain all the rest.
