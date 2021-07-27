import axios from 'axios'

export async function getQuestion() {
    const storyData = await axios.get('api/story/1');
    const results = storyData.data[0];
    return results;
}
