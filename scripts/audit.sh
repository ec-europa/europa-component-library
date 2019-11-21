#!/bin/bash

set +e

yarn audit; [[ $? -ge 4 ]] && exit 1 || exit 0
