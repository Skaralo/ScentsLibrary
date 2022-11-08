import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://opdracht.sense-company.com/scents/' + id )
            post.value = await data.json()

        }
        catch (err) {
            error.value = err.message 
            console.log(error.value) 
 
             }
        }
            return { post, error , load }
    }

    export default getPost