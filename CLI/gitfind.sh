#!/usr/bin/env bash

ARG=${1?Error: Need a search term}
git log --pretty=oneline | grep $ARG
