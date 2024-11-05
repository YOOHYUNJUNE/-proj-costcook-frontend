import apiClient from './api';

export const recipeAPI = {
  getRecipeList: (page, sort, order) =>
    apiClient.get(`/recipes?page=${page}&size=9&sort=${sort}&order=${order}`),
  getRecipeById: (recipeId) => apiClient.get(`/recipes/${recipeId}`),
  // getReviewsByRecipeIdWithPagination
  getRecipeReviews: (recipeId, page) =>
    apiClient.get(`/recipes/${recipeId}/reviews?page=${page}`),
  searchRecipeList: ({ keyword, page }) =>
    apiClient.get(`/recipes/search?keyword=${keyword}&page=${page}`),
  getRecipesByBudget: (minBudget, maxBudget) =>
    apiClient.get(
      `/recommendations/recipes?minBudget=${minBudget}&maxBudget=${maxBudget}`
    ),
  // 비회원이 즐겨찾기에 추가한 레시피 목록 정보 불러오기
  getRecipeListByIds: (recipeIds) =>
    apiClient.get(`/recipes?ids=${recipeIds.join('&ids=')}`),
};
