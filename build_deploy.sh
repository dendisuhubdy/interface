#sudo npm install -g serve
#sudo serve -s build -l 80

npm run build
sudo rm -rf /usr/share/nginx/html/*
cd ./build
sudo cp -R * /usr/share/nginx/html/
cd ..
