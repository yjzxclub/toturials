#!/bin/bash

filename1=$1
filename2="${filename1%.*}_black.pdf"
gs \
 -sOutputFile=${filename2} \
 -sDEVICE=pdfwrite \
 -sColorConversionStrategy=Gray \
 -dProcessColorModel=/DeviceGray \
 -dCompatibilityLevel=1.4 \
 -dNOPAUSE \
 -dBATCH \
 ${filename1}
