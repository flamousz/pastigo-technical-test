import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardingView from "../views/BoardingView.vue";
import LoginView from "../views/LoginView.vue";
import HomePageView from "../views/HomePageView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import NewPasswordView from "../views/NewPasswordView.vue";
import NewPasswordFormView from "../views/NewPasswordFormView.vue";
import NewPasswordSuccessVue from "../views/NewPasswordSuccessVue.vue";
import UserView from '../views/UserView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/boarding",
			name: "boarding",
			component: BoardingView,
		},
		{
			path: '/user',
			name: 'user',
			component: UserView,
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					component: HomePageView
				}
			]
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/homepage",
			name: "homepage",
			component: HomePageView,
		},
		{
			path: "/forgotpassword",
			name: "forgotpassword",
			component: ForgotPasswordView,
			children: [
				{
					path: "newpassword",
					name: "newpassword",
					component: NewPasswordView,
				},
			],
		},
		{
			path: "/newpassword",
			name: "newpassword",
			component: NewPasswordView,
			children: [
				{
					path: "form",
					name: "form",
					component: NewPasswordFormView,
				},
				{
					path: "success",
					name: "successpassword",
					component: NewPasswordSuccessVue,
				},
			],
		},
	],
});

export default router;
