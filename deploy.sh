docker stop website
echo "container stopped"
docker rm website
echo "container removed"
docker rmi website
echo "image removed"
sudo git pull 
echo "files pulled"
docker build -t website .
echo "image built"
docker run -itd -p 7551:3000 --name website website
echo "container running"
echo "mission accomplished"