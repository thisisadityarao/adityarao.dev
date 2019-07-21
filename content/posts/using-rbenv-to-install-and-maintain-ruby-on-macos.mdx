---
title: "Using rbenv to install and maintain Ruby on macOS."
date: "2017-10-09"
tags: ["ruby"]
---

I haven't learned [Ruby][1] but I do use [Bundler][2] it's dependency management programme. While trying to update the previous post I ran across a problem with Ruby, for which I spent more than 30 minutes to find and try the solutions. I did find the solution that worked - reinstalling Ruby. But this time I used a Ruby version management tool [rbenv][3].

## The problem

This blog is created using Jekyll on a Mac. Mac comes with Ruby pre-installed, but this version of Ruby is usually old. My system(macOS) Ruby version is at `v2.0.0` while the latest stable release is at `v2.4.2`.

Using `ruby -v` I get the following result.

```shell
$ ruby -v
ruby 2.0.0p648 (2015-12-16 revision 53162) [universal.x86_64-darwin16]
```

This is the system Ruby. The output should show me the version of Ruby I installed using Homebrew as always. Something like this :

```shell
$ ruby -v
ruby 2.4.2p198 (2017-09-13 revision 59899) [x86_64-darwin16]
```

I discovered the problem while updating the previous blog post. Jekyll itself is a Ruby gem, and all its plugins are also gems that need to be installed separately. I wanted to update gems and so I ran `bundle update`, but it wouldn't work. It was showing following error:

```shell
$ bundle update
ERROR: While executing gem ... (Gem::FilePermissionError)
You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.
```

I don't have write permissions for the `/Library/Ruby/Gems/2.0.0 directory` because that's the system Ruby installation. The system Ruby is not writable by a normal user; if you want to modify the system Ruby's gems, you need to use `sudo`. But I don't want to use system Ruby, what happened to my Homebrew Ruby?

Honestly, I didn't dig deeper into this issue since I just wanted to get my post online and be done for the day. I decided to remove the homebrew ruby and reinstall it using `rbenv` . From my knowledge, unlike `rvm`, `rbenv` is not available for windows. **This post will only be useful for macOS users.**

## Why rbenv ?

- Different users can have their own **global Ruby version**.
- You can install project specific **local Ruby versions**.

The rest of the post includes steps to install `rbenv`, install Ruby using `rbenv`, installing gems, upgrading `rbenv` and some common commands you might find useful.

## Prerequisite

We use [Homebrew][4] to install and manage `rbenv` .

You should note that `rbenv` is _incompatible_ with `RVM`. `RVM` is another popular Ruby version management tool. Uninstall `RVM` before installing `rbenv`.

If you are using `RVM` and are happy with it, then no need to change anything. But if you want to know why choose `rbenv` over `RVM` then [have a look at this][5].

## Installing rbenv

1. Installing using Homebrew

```shell
brew install rbenv
```

Note that this also installs [`ruby-build`][6], so you'll be ready to install other Ruby versions out of the box.

2. Add the following PATH to `~/.zshrc` or `~/.bash_profile` if you use bash.

```shell
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
```

3. Run `rbenv init` and follow the instruction which is as follows :

```shell
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

4. Restart your shell so that PATH changes take effect. (Opening a new terminal tab will usually do it.) 2.
   Verify that rbenv is properly set up using this [rbenv-doctor][7] script:

```shell
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

## Installing Ruby Versions

Use `rbenv install` to install different versions of ruby.

```shell
# list all available versions:
$ rbenv install -l

# install a Ruby version:
$ rbenv install 2.3.0
```

## Installing Ruby Gems

Install `bundler` to install ruby gems.

```shell
gem install bundler
```

## Upgrading with Homebrew

To upgrade to the latest rbenv and update ruby-build with newly released Ruby versions, upgrade the Homebrew packages:

```shell
$ brew upgrade rbenv ruby-build
```

## Command Reference

A few of the most common commands:

### rbenv local

Sets a local application-specific Ruby version by writing the version name to a `.ruby-version` file in the current directory. This version overrides the global version, and can be overridden itself by setting the `RBENV_VERSION`environment variable or with the `rbenv shell` command.

```shell
$ rbenv local 1.9.3-p327
```

When run without a version number, `rbenv local` reports the currently configured local version. You can also unset the local version:

```shell
$ rbenv local --unset
```

### rbenv global

Sets the global version of Ruby to be used in all shells by writing the version name to the `~/.rbenv/version` file. This version can be overridden by an application-specific `.ruby-version` file, or by setting the `RBENV_VERSION`environment variable.

```shell
$ rbenv global 1.8.7-p352
```

The special version name `system` tells rbenv to use the system Ruby (detected by searching your `$PATH`).

When run without a version number, `rbenv global` reports the currently configured global version.

### rbenv versions

Lists all Ruby versions known to rbenv, and shows an asterisk next to the currently active version.

```shell
$ rbenv versions
  1.8.7-p352
  1.9.2-p290
* 1.9.3-p327 (set by /Users/sam/.rbenv/version)
  jruby-1.7.1
  rbx-1.2.4
  ree-1.8.7-2011.03
```

### rbenv version

Displays the currently active Ruby version, along with information on how it was set.

```shell
$ rbenv version
1.9.3-p327 (set by /Users/sam/.rbenv/version)
```

### rbenv rehash

Installs shims for all Ruby executables known to rbenv (i.e., `~/.rbenv/versions/*/bin/*`). Run this command after you install a new version of Ruby, or install a gem that provides commands.

```shell
$ rbenv rehash
```

### rbenv which

Displays the full path to the executable that rbenv will invoke when you run the given command.

```shell
$ rbenv which irb
/Users/sam/.rbenv/versions/1.9.3-p327/bin/irb
```

[All these commands can be found on `rbenv` GitHub page.][8] I have simply reproduced(copied 😅) it here as it is.

<div class="line"></div>

[1]: https://www.ruby-lang.org/en/ "Ruby Programming Language"
[2]: https://bundler.io/ "Bundler"
[3]: https://github.com/rbenv/rbenv "rbenv"
[4]: https://brew.sh/ "Homebrew"
[5]: https://github.com/rbenv/rbenv/wiki/Why-rbenv%3F "Why choose rbenv?"
[6]: https://github.com/rbenv/ruby-build "ruby-build"
[7]: https://github.com/rbenv/rbenv-installer/blob/master/bin/rbenv-doctor "rbenv-doctor"
[8]: https://github.com/rbenv/rbenv#command-reference "List of commands for rbenv."
