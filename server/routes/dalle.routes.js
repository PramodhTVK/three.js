// import express from 'express';
// import * as dotenv from 'dotenv';
// import { Configuration,OpenAIApi } from 'openai';

// dotenv.config();    

// const router = express.Router();

// const config = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(config);

// router.route('/').get((req,res)=>{
//     res.status(200).json({message:'Hello from DALL.E routes!'});
// })

// router.route('/').post(async (req,res)=>{
//     try {
//        const { prompt } = req.body;
//        const response = await openai.createImage({ prompt,n:1,size:'1024*1024',response_format:'b64_json' });
//        const image = response.data.data[0].b64_json
//        res.status(200).json({photo: image});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    // const { prompt } = req.body;

    // const response = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: "1024x1024",
    //   response_format: "b64_json"
    // });

    // const image = response.data.data[0].b64_json;

    // res.status(200).json({ photo: image });
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: "A cute baby sea otter",
  n: 2,
  size: "1024x1024",
});

  } catch (error) {
    if (error.response) {
      console.error("OpenAI API Error:", error.response.data.error);
    } else {
      console.error("Error:", error.message);
    }
    res.status(500).json({ message: "Something went wrong" });
  }
})

export default router;