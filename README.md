# rem-loader
webpack rem-loader px2rem

##how to use
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader!rem-loader'
      }
    ]
  }
  
eg.:

less: 
  p {
    width: 20im;
  }


css:
  p {
    width: 0.427rem;
  }
