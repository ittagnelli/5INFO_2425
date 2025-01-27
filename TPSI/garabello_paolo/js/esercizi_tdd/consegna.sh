#!/bin/bash

for (( i = $1; i <= $2; i++ ))
do
    # testa l'esercizio
    dir="esercizio_js_$i"
    echo "Testo l'esercizio $dir"
    
    npm run test $dir &>/dev/null
    if [ $? -ne 0 ]; then
        echo "Test fallito per $dir"
        npm run test $dir
        exit 1
    fi

    git add $dir
done

git commit -m "Aggiunti esercizio [$1, $2]"