const path = require("path");
const getFilesFromDir = require("./config/files");
const PAGE_DIR = path.join("src", "pages", path.sep);

const jsFiles = getFilesFromDir(PAGE_DIR, [".js"]);
const entry = jsFiles.reduce( (obj, filePath) => {
   const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
   obj[entryChunkName] = `./${filePath}`;
   return obj;
}, {});

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlFiles = getFilesFromDir(PAGE_DIR, [".html"]);
const htmlPlugins = htmlFiles.map( filePath => {
  const fileName = filePath.replace(PAGE_DIR, "");
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), ""), "vendor"],
    template: filePath,
    filename: fileName})
});

module.exports = {
  entry: entry,
  
  plugins: [...htmlPlugins],

  resolve: {
    alias:{
       src: path.resolve(__dirname, "src"),
       components: path.resolve(__dirname, "src", "components"),
       images: path.resolve(__dirname, 'src', 'images'),
    }
 },

 module: {
  rules: [{
      test: /\.js$/i,
      exclude: /node_modules/,
      use: {
          loader:"babel-loader",
            options:{
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react"
                ]
            }
      }
    },
    {
      test: /\.(pdf|jpg|png|gif|svg|ico)$/i,
      use: [
          'file-loader'
      ]
    },
    {
      test: /.s?css$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },

    {
      test: /\.(html)$/,
      use: [{loader:'html-loader'}]
    }

  ],
  },

  optimization: {
    splitChunks: {
       cacheGroups: {
          vendor: {
             test: /node_modules/,
             chunks: "initial",
             name: "vendor",
             enforce: true
          }
       }
    }
 }
};