#!/bin/bash

until docker version > /dev/null 2>&1
do
  sleep 1
done

# additional wait, previous check is not enough
sleep 5
