if [ -z "$DOCKER_IMAGE_NAME" ] || [ -z "$DOCKER_PLATFORM_TARGET" ]; then
  echo "Error: DOCKER_IMAGE_NAME and/or DOCKER_PLATFORM_TARGET are not set in .env"
  exit 1
fi

echo "Creating .env.production"
cp .env .env.production
sed -i '' 's/^NODE_ENV=.*/NODE_ENV=production/' .env.production
sed -i '' 's/^LOG_LEVEL=.*/LOG_LEVEL=error/' .env.production
sed -i '' 's/^HOST=.*/HOST=0.0.0.0/' .env.production
sed -i '' 's/^PORT=.*/PORT=8080/' .env.production

source .env.production
echo $DOCKER_IMAGE_NAME $DOCKER_PLATFORM_TARGET $NODE_ENV $HOST $PORT
echo "\n"

docker build --platform $DOCKER_PLATFORM_TARGET -t $DOCKER_IMAGE_NAME .
docker push $DOCKER_IMAGE_NAME

echo "\nDeletting .env.production"
rm .env.production