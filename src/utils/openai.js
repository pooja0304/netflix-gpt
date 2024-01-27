import OpenAI from 'openai';
import { GPT_API } from './constants';

const openai = new OpenAI({
  apiKey: GPT_API, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});
export default openai