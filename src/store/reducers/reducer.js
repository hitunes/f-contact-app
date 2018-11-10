import {
  FETCH_TRENDS,
  FETCH_TREND,
  UPDATE_TREND_LIKES
} from "../actions/types";

const initialState = {
  allTrends: {
    items: [],
    searchTrends: "",
    loading: true,
    loadingMore: false,
    error: ""
  },
  categoriesTrends: {
    items: [],
    loading: true,
    loadingMore: false,
    error: "",
    searchTrends: ""
  },
  selectedTrend: {
    card: {
      id: null,
      category: {},
      culture: {},
      event_type: {},
      content: []
    },
    loading: true,
    similar: [],
    meta: [],
    links: []
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDS:
      const trendsInfo = action.payload.data;
      trendsInfo.forEach(trend => {
        if (trend.like === undefined) {
          trend.like = trend.like ? true : false;
        }
      });
      const all = (state.allTrends = {
        loading: false,
        loadingMore: false,
        items:
          state.allTrends.items.length > 0
            ? [...state.allTrends.items, ...trendsInfo]
            : trendsInfo
      });
      return { ...state, ...all };

    case FETCH_TREND:
      const trend = action.payload;
      const selected = (state.selectedTrend = {
        loading: false,
        card: trend.data,
        similar: trend.similar.data,
        meta: trend.meta,
        links: trend.links
      });
      return { ...state, ...selected };
    case UPDATE_TREND_LIKES:
      let trendingCards = [...state.allTrends.items];
      trendingCards.forEach(card => {
        const cardId = action.payload;
        if (card.uid === cardId && card.like === false) {
          card.like = !card.like;
          card.stats.likes++;
        }
      });
      const Likes = (state.allTrends = { items: trendingCards });
      return { ...state, ...Likes };
    default:
      return state;
  }
};
