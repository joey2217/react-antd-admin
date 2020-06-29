import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'

module.exports = async (request: NowRequest, response: NowResponse) => {
  try {
    const res = await axios.get('https://api.douban.com/v2/movie/imdb/tt0111161?apikey=0df993c66c0c636e29ecbb5344252a4a');
    console.log(res);
    response.status(200).json({
      success: true,
      data: res
    })
  } catch (error) {
    console.log(error);
    response.status(500).json({
      success: false,
      error: error
    })
  }
};