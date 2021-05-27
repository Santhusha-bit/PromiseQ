import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "styles/theme";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					{/* <!-- Google Tag Manager --> */}
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MRCGFND');`,
						}}
					></script>
					{/* <!-- End Google Tag Manager --> */}
				</Head>
				<body>
					{/* <!-- Google Tag Manager (noscript) --> */}
					<noscript
						dangerouslySetInnerHTML={{
							__html: `
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-MRCGFND"
							height="0"
							width="0"
							style="display:none;visibility:hidden"
						></iframe>`,
						}}
					></noscript>
					{/* <!-- End Google Tag Manager (noscript) --> */}
					<Main />
					<NextScript />
					{/* <!-- Start of HubSpot Embed Code --> */}
					<script
						type="text/javascript"
						id="hs-script-loader"
						async
						defer
						src="//js-na1.hs-scripts.com/9094398.js"
					></script>
					{/* <!-- End of HubSpot Embed Code --> */}
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	};
};
