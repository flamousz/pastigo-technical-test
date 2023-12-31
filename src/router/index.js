import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardingView from "../views/BoardingView.vue";
import LoginView from "../views/LoginView.vue";
import HomePageView from "../views/HomePageView.vue";
import ForgotPasswordView from "../views/ForgotPasswordView.vue";
import NewPasswordView from "../views/NewPasswordView.vue";
import NewPasswordFormView from "../views/NewPasswordFormView.vue";
import NewPasswordSuccessVue from "../views/NewPasswordSuccessVue.vue";
import UserView from "../views/UserView.vue";
import AccountView from "../views/AccountView.vue";
import NearbyView from "../views/NearbyView.vue";
import CourierView from "../views/CourierView.vue";
import NotificationView from "../views/NotificationView.vue";
import PickupView from "../views/PickupView.vue";
import PendingView from "../views/PendingView.vue";
import ProgressView from "../views/ProgressView.vue";
import SuccessView from "../views/SuccessView.vue";
import TroubleView from "../views/TroubleView.vue";
import ChangePasswordVIew from "../views/ChangePasswordVIew.vue";
import ChangeProfile from "../views/ChangeProfile.vue";

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
			path: "/resetpassword",
			name: "resetpassword",
			component: ChangePasswordVIew,
		},
		{
			path: "/changeprofile",
			name: "changeprofile",
			component: ChangeProfile,
		},
		{
			path: "/user",
			name: "user",
			component: UserView,
			children: [
				{
					path: "dashboard",
					name: "dashboard",
					component: HomePageView,
				},
				{
					path: "account",
					name: "account",
					component: AccountView,
				},
				{
					path: "nearby",
					name: "nearby",
					component: NearbyView,
				},
				{
					path: "courier",
					name: "courier",
					component: CourierView,
				},
				{
					path: "notification",
					name: "notification",
					component: NotificationView,
				},
			],
		},
		{
			path: "/pickup",
			name: "pickup",
			component: PickupView,
			children: [
				{
					path: 'pending',
					name: 'pending',
					component: PendingView
				},
				{
					path: 'success',
					name: 'successpickup',
					component: SuccessView
				},
				{
					path: 'progress',
					name: 'progresspickup',
					component: ProgressView
				},
				{
					path: 'trouble',
					name: 'troublepickup',
					component: TroubleView
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
