read -s -p "Password: " SECRET && echo

node crypt.js $SECRET decrypt
