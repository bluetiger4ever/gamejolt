import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as View from '!view!./poll.html';

import { Meta } from '../../../../../lib/gj-lib-client/components/meta/meta-service';
import { Growls } from '../../../../../lib/gj-lib-client/components/growls/growls.service';
import { AppProgressPoller } from '../../../../../lib/gj-lib-client/components/progress/poller/poller';
import { AppLoading } from '../../../../../lib/gj-lib-client/vue/components/loading/loading';

@View
@Component({
	components: {
		AppProgressPoller,
		AppLoading,
	},
})
export default class RouteAuthLinkedAccountPoll extends Vue {
	token = '';
	isPolling = true;

	created() {
		Meta.title = this.$gettext(`Waiting for Login`);
		this.token = this.$route.query.token;
	}

	completed(response: any) {
		// Redirect them off to complete their social login like normal.
		if (response.provider === 'facebook') {
			this.$router.push({
				name: 'auth.linked-account.facebook.callback',
				query: { code: response.code, state: this.token },
			});
		} else if (response.provider === 'twitch') {
			this.$router.push({
				name: 'auth.linked-account.twitch.callback',
				query: { code: response.code, state: this.token },
			});
		} else if (response.provider === 'twitter') {
			this.$router.push({
				name: 'auth.linked-account.twitter.callback',
				query: {
					oauth_verifier: response['oauth-verifier'],
					state: this.token,
				},
			});
		} else if (response.provider === 'google') {
			this.$router.push({
				name: 'auth.linked-account.google.callback',
				query: { code: response.code, state: this.token },
			});
		}

		this.isPolling = false;

		// Focus back to the Client.
		// TODO: Client
		if (GJ_IS_CLIENT) {
			// Client.show();
		}
	}

	failed() {
		Growls.error(this.$gettext(`Couldn't authorize.`), this.$gettext(`Authorization Failed`));
		this.$router.push({ name: 'auth.login' });
	}
}
