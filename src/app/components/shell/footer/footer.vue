<script lang="ts" src="./footer"></script>

<template>
	<footer id="footer" class="section">
		<div class="container">
			<template v-if="!Screen.isXs">
				<div v-if="!GJ_IS_CLIENT" class="text-center">
					<p>
						<router-link
							v-app-track-event="`footer:client-promo`"
							class="-client-logo"
							:to="{ name: 'landing.client' }"
						>
							<app-theme-svg
								src="~img/game-jolt-client-logo.svg"
								alt="Game Jolt Client"
								strict-colors
							/>
						</router-link>
						<app-button solid primary :to="{ name: 'landing.client' }">
							<translate>Get It Now</translate>
						</app-button>
					</p>
				</div>

				<br />
			</template>

			<div class="clearfix">
				<div class="footer-links">
					<div class="row">
						<div class="col-xs-4 col-sm-3">
							<ol class="list-unstyled footer-link-list">
								<li>
									<router-link :to="{ name: 'landing.learn' }">
										<translate>What's Game Jolt</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'landing.client' }">
										<translate>Client</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'forums.landing.overview' }">
										<translate>Forums</translate>
									</router-link>
								</li>
							</ol>
						</div>
						<div class="col-xs-4 col-sm-3">
							<ol class="list-unstyled footer-link-list">
								<li>
									<router-link :to="{ name: 'landing.about' }">
										<translate>About</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'landing.game-api' }">
										<translate>Game API</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'landing.marketplace' }">
										<translate>Marketplace</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'landing.partners' }">
										<translate>Partners</translate>
									</router-link>
								</li>
							</ol>
						</div>
						<div class="col-xs-4 col-sm-3 hidden-xs">
							<ol class="list-unstyled footer-link-list">
								<li>
									<app-link-external href="https://github.com/gamejolt">
										<translate>footer.open_source</translate>
									</app-link-external>
								</li>
								<li>
									<router-link
										:to="{
											name: 'forums.channels.view',
											params: { name: 'gj-improve' },
										}"
									>
										<translate>Feature Requests</translate>
									</router-link>
								</li>
								<li>
									<app-link-external
										href="https://github.com/gamejolt/issue-tracker"
									>
										<translate>Bug Tracker</translate>
									</app-link-external>
								</li>
								<li>
									<app-link-external
										href="https://www.redbubble.com/people/gamejolt/shop"
									>
										<translate>Merch</translate>
									</app-link-external>
								</li>
							</ol>
						</div>
						<div class="col-xs-4 col-sm-3">
							<ol class="list-unstyled footer-link-list">
								<li>
									<router-link
										:to="{
											name: 'landing.help',
											params: { path: 'guidelines' },
										}"
									>
										<translate>Site Guidelines</translate>
									</router-link>
								</li>
								<li>
									<router-link
										:to="{
											name: 'landing.help',
											params: { path: 'support' },
										}"
									>
										<translate>Support</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'legal.terms' }">
										<translate>legal.terms</translate>
									</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'legal.privacy' }">
										<translate>legal.privacy</translate>
									</router-link>
								</li>
								<li v-if="!GJ_IS_CLIENT">
									<router-link :to="{ name: 'legal.cookies' }">
										<translate>Cookie Policy</translate>
									</router-link>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<div class="clearfix">
				<div v-if="!Screen.isXs" class="footer-jolt">
					<router-link :to="{ name: 'home' }">
						<app-theme-svg
							src="~img/jolt.svg"
							alt=""
							width="68"
							height="72"
							strict-colors
						/>
					</router-link>
				</div>
				<div class="footer-meta">
					<p>
						<app-button
							trans
							circle
							icon="twitter-bird"
							href="https://twitter.com/gamejolt"
							target="_blank"
						/>
						<app-button
							trans
							circle
							icon="facebook"
							href="https://facebook.com/gamejolt"
							target="_blank"
						/>
					</p>

					<p class="tiny">&copy; {{ date(curDate, 'yyyy') }} Lucent Web Creative, LLC</p>

					<p v-if="GJ_IS_CLIENT" class="tiny text-muted">
						<a class="link-muted" @click="showSystemReport">
							<translate>footer.send_system_report</translate>
						</a>
						<span class="dot-separator" />
						v{{ clientVersion }}
					</p>
				</div>
				<div class="footer-translations">
					<div>
						<app-translate-lang-selector />
					</div>

					<br class="hidden-xs" />

					<p class="small text-muted">
						<translate>footer.translations</translate>
						<br />
						<app-link-external href="https://poeditor.com/join/project/B4nWT6EgnD">
							<translate>footer.translations_help</translate>
						</app-link-external>
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="stylus" src="./footer.styl" scoped></style>
