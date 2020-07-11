import axios from "axios";

const state = {
    articles: [
        {
            id: 1,
            title: "Accusamus beatae ad facilis cum similique qui sunt",
            destination: "Destination Europe",
            author: "Added by John Williams Doe",
            postTime: "January 01, 2018",
            image: "https://via.placeholder.com/150/92c952",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi cum dolor eos est ex fugit harum illo in incidunt inventore ipsam labore laudantium praesentium quae quidem, ratione reiciendis rem reprehenderit similique tempore tenetur veniam veritatis! Ab debitis iste laborum numquam quasi reiciendis sint sunt? Ab aliquid, asperiores cumque dignissimos dolores eligendi enim error facilis hic laboriosam maxime nesciunt obcaecati quas quidem quo quod, quos rem saepe suscipit tenetur, veniam voluptates voluptatibus. Dicta eligendi excepturi exercitationem magni sequi. Architecto aut consectetur culpa, dicta dolorem eius ex exercitationem facilis illo, impedit laudantium magni maxime molestias non nulla quasi quia. A, eum?"
        },
        {
            id: 2,
            title: "Reprehenderit est deserunt velit ipsam",
            destination: "Destination Europe",
            author: "Added by John Williams Doe",
            postTime: "January 01, 2018",
            image: "https://via.placeholder.com/150/771796",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi cum dolor eos est ex fugit harum illo in incidunt inventore ipsam labore laudantium praesentium quae quidem, ratione reiciendis rem reprehenderit similique tempore tenetur veniam veritatis! Ab debitis iste laborum numquam quasi reiciendis sint sunt? Ab aliquid, asperiores cumque dignissimos dolores eligendi enim error facilis hic laboriosam maxime nesciunt obcaecati quas quidem quo quod, quos rem saepe suscipit tenetur, veniam voluptates voluptatibus. Dicta eligendi excepturi exercitationem magni sequi. Architecto aut consectetur culpa, dicta dolorem eius ex exercitationem facilis illo, impedit laudantium magni maxime molestias non nulla quasi quia. A, eum?"
        },
        {
            id: 3,
            title: "Officia porro iure quia iusto qui ipsa ut modi",
            destination: "Destination Europe",
            author: "Added by John Williams Doe",
            postTime: "January 01, 2018",
            image: "https://via.placeholder.com/150/24f355",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi cum dolor eos est ex fugit harum illo in incidunt inventore ipsam labore laudantium praesentium quae quidem, ratione reiciendis rem reprehenderit similique tempore tenetur veniam veritatis! Ab debitis iste laborum numquam quasi reiciendis sint sunt? Ab aliquid, asperiores cumque dignissimos dolores eligendi enim error facilis hic laboriosam maxime nesciunt obcaecati quas quidem quo quod, quos rem saepe suscipit tenetur, veniam voluptates voluptatibus. Dicta eligendi excepturi exercitationem magni sequi. Architecto aut consectetur culpa, dicta dolorem eius ex exercitationem facilis illo, impedit laudantium magni maxime molestias non nulla quasi quia. A, eum?"
        }
    ],
    fromApi: []
};

const mutations = {
    setData(state, payload) {
        state.fromApi = payload;
    }
};

const getters = {
    getById: (state, getters) => (id) => {
        return state.articles.find(article => article.id === parseInt(id));
    }
};

const actions = {
    async fetchApi({commit}) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        commit("setData", result.data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}