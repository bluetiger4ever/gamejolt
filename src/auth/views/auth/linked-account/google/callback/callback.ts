import Vue from 'vue';
import VueRouter from 'vue-router';
import { Component } from 'vue-property-decorator';

import { AuthLinkedAccountProcessing } from '../../_processing/processing';
import { RouteResolve } from '../../../../../../lib/gj-lib-client/utils/router';
import { Api } from '../../../../../../lib/gj-lib-client/components/api/api.service';
import { Growls } from '../../../../../../lib/gj-lib-client/components/growls/growls.service';
import { Auth } from '../../../../../../lib/gj-lib-client/components/auth/auth.service';

@Component({})
export default class RouteAuthLinkedAccountGoogleCallback extends Vue {
	@RouteResolve()
	routeResolve(this: undefined, route: VueRouter.Route) {
		const { code, state } = route.query;
		return Api.sendRequest('/web/auth/google/callback?code=' + code + '&state=' + state, {});
	}

	routed() {
		if (!this.$payload.success) {
			if (this.$payload.reason && this.$payload.reason === 'no-email') {
				Growls.error({
					sticky: true,
					message: this.$gettext(
						`Your Google+ account did not return an email address. Make sure you have verified it with Google.`
					),
				});
			} else if (this.$payload.reason && this.$payload.reason === 'duplicate-email') {
				Growls.error({
					sticky: true,
					message: this.$gettext(
						`The email address on this Google+ account is already in use. Perhaps you already have an account?`
					),
				});
			} else {
				Growls.error({
					sticky: true,
					title: this.$gettext('Login Failed'),
					message: this.$gettext('Unable to log in with Google+.'),
				});
			}
			this.$router.push({ name: 'auth.join' });
			return;
		}

		Auth.redirectDashboard();
	}

	render(h: Vue.CreateElement) {
		return h(AuthLinkedAccountProcessing);
	}
}
