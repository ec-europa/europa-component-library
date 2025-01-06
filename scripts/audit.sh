#!/bin/bash

set +e

pnpm audit; [[ $? -ge 4 ]] && exit 1 || exit 0
