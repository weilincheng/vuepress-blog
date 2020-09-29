---
title: How to Make shift + insert Work in Vim?
date: 2020-09-28
tags : 
    - programming
    - vim
summary: Map shift + insert to middle mouse button in Vim.
---

## What happens when you press `shift` + `insert` in Vim?

In Linux, `shift` + `insert` is a very useful hotkey to paste from clipboard. But when you are trying to do the same in Vim, you can only get `<S-Insert>` instead of something you copied. 

It is very annoying, right?

## How to fix it? 

Very simple. 

1. Open you `.vimrc` which is usually under your home directory.
```
prompt> vim ~/.vimrc
```

2. Just add below lines into your `.vimrc` file so that you map `shift` + `insert` to middle-click. 
```
map <S-Insert> <MiddleMouse>
map! <S-Insert> <MiddleMouse>
```

Then `shift` + `insert` can work as expected to past from clipboard! 

## What does `map` and `map!` do?

The `map` command creates a key map that works in normal, visual, select and operator pending modes. 
The `map!` command creates a key map that works in insert and command-line modes. 

So you need to define both of them to make `shift` + `insert` work under every modes. 

Thanks for reading. 
Hope it is useful to you!

## Reference 
[Vim Tips Wiki](https://vim.fandom.com/wiki/Mapping_keys_in_Vim_-_Tutorial_(Part_1))