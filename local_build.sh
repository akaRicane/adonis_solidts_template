echo "\nBuilding app in (local) production mode"
npm run build

mkdir -p build
mkdir -p build/temp

echo "\nEdit .env with production configurations"
cp .env .env.production
sed -i '' 's/^NODE_ENV=.*/NODE_ENV=production/' .env.production
sed -i '' 's/^LOG_LEVEL=.*/LOG_LEVEL=error/' .env.production
sed -i '' 's/^HOST=.*/HOST=0.0.0.0/' .env.production
sed -i '' 's/^PORT=.*/PORT=8080/' .env.production

echo "\nCopying env to build folder"
cp .env.production build/.env

echo "\nDeletting .env.production"
rm .env.production

echo "\nStarting building node modules"
cd build
npm i --omit=dev

echo "\nStarting app from build folder (production mode)"
node bin/server.js
