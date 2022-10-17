// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/[slug]/p.tsx";
import * as $2 from "./routes/admin.tsx";
import * as $3 from "./routes/api/cart/index.ts";
import * as $4 from "./routes/api/cart/items.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/inspect-vscode.ts";
import * as $7 from "./routes/live/login.tsx";
import * as $8 from "./routes/live/login/success.tsx";
import * as $9 from "./routes/search.tsx";
import * as $10 from "./routes/start.tsx";
import * as $$0 from "./islands/AddToCart.tsx";
import * as $$1 from "./islands/Alert.tsx";
import * as $$2 from "./islands/AuthListener.tsx";
import * as $$3 from "./islands/Editor.tsx";
import * as $$4 from "./islands/FooterAccordion.tsx";
import * as $$5 from "./islands/InspectVSCode.tsx";
import * as $$6 from "./islands/LoginButtons.tsx";
import * as $$7 from "./islands/Minicart.tsx";
import * as $$8 from "./islands/ProductInformation.tsx";
import * as $$9 from "./islands/SKUSelector.tsx";
import * as $$10 from "./islands/SearchBar.tsx";
import * as $$11 from "./islands/SearchControls.tsx";
import * as $$12 from "./islands/VideoCarousel.tsx";
import * as $$$0 from "./components/Banner.tsx";
import * as $$$1 from "./components/BannerGridImages.tsx";
import * as $$$2 from "./components/BannerImg.tsx";
import * as $$$3 from "./components/Footer.tsx";
import * as $$$4 from "./components/GetStarted.tsx";
import * as $$$5 from "./components/Head.tsx";
import * as $$$6 from "./components/Header.tsx";
import * as $$$7 from "./components/HomeFilter.tsx";
import * as $$$8 from "./components/IconCart.tsx";
import * as $$$9 from "./components/ListLinks.tsx";
import * as $$$10 from "./components/MarcasConvidadas.tsx";
import * as $$$11 from "./components/Newsletter.tsx";
import * as $$$12 from "./components/ProductCard.tsx";
import * as $$$13 from "./components/ProductDetails.tsx";
import * as $$$14 from "./components/ProductGallery.tsx";
import * as $$$15 from "./components/ProductShelf.tsx";
import * as $$$16 from "./components/QuantitySelector.tsx";
import * as $$$17 from "./components/Search.tsx";
import * as $$$18 from "./components/StoreFeatures.tsx";
import * as $$$19 from "./components/icons/DecoFashionLogo.tsx";
import * as $$$20 from "./components/icons/SearchIcon.tsx";
import * as $$$21 from "./components/ui/Image.tsx";
import * as $$$22 from "./components/ui/Spinner.tsx";
import * as $$$23 from "./components/ui/Video.tsx";
import * as $$$$0 from "./loaders/vtex/searchCollections.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/[slug]/p.tsx": $1,
    "./routes/admin.tsx": $2,
    "./routes/api/cart/index.ts": $3,
    "./routes/api/cart/items.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/inspect-vscode.ts": $6,
    "./routes/live/login.tsx": $7,
    "./routes/live/login/success.tsx": $8,
    "./routes/search.tsx": $9,
    "./routes/start.tsx": $10,
  },
  islands: {
    "./islands/AddToCart.tsx": $$0,
    "./islands/Alert.tsx": $$1,
    "./islands/AuthListener.tsx": $$2,
    "./islands/Editor.tsx": $$3,
    "./islands/FooterAccordion.tsx": $$4,
    "./islands/InspectVSCode.tsx": $$5,
    "./islands/LoginButtons.tsx": $$6,
    "./islands/Minicart.tsx": $$7,
    "./islands/ProductInformation.tsx": $$8,
    "./islands/SKUSelector.tsx": $$9,
    "./islands/SearchBar.tsx": $$10,
    "./islands/SearchControls.tsx": $$11,
    "./islands/VideoCarousel.tsx": $$12,
  },
  components: {
    "./components/Banner.tsx": $$$0,
    "./components/BannerGridImages.tsx": $$$1,
    "./components/BannerImg.tsx": $$$2,
    "./components/Footer.tsx": $$$3,
    "./components/GetStarted.tsx": $$$4,
    "./components/Head.tsx": $$$5,
    "./components/Header.tsx": $$$6,
    "./components/HomeFilter.tsx": $$$7,
    "./components/IconCart.tsx": $$$8,
    "./components/ListLinks.tsx": $$$9,
    "./components/MarcasConvidadas.tsx": $$$10,
    "./components/Newsletter.tsx": $$$11,
    "./components/ProductCard.tsx": $$$12,
    "./components/ProductDetails.tsx": $$$13,
    "./components/ProductGallery.tsx": $$$14,
    "./components/ProductShelf.tsx": $$$15,
    "./components/QuantitySelector.tsx": $$$16,
    "./components/Search.tsx": $$$17,
    "./components/StoreFeatures.tsx": $$$18,
    "./components/icons/DecoFashionLogo.tsx": $$$19,
    "./components/icons/SearchIcon.tsx": $$$20,
    "./components/ui/Image.tsx": $$$21,
    "./components/ui/Spinner.tsx": $$$22,
    "./components/ui/Video.tsx": $$$23,
  },
  loaders: { "./loaders/vtex/searchCollections.ts": $$$$0 },
  schemas: {
    "SearchControls": {
      "title": "SearchControls",
      "type": "object",
      "properties": {},
    },
    "VideoCarousel": {
      "title": "Carousel de Vídeos",
      "type": "object",
      "required": ["video1"],
      "properties": {
        "video1": {
          "type": "object",
          "properties": {
            "mobile": { "type": "string", "title": "Vídeo Mobile" },
            "desktop": { "type": "string", "title": "Vídeo Desktop" },
            "alt": { "type": "string", "title": "Texto alternativo" },
            "link": { "type": "string", "title": "Link" },
          },
        },
        "video2": {
          "type": "object",
          "properties": {
            "mobile": { "type": "string", "title": "Vídeo Mobile" },
            "desktop": { "type": "string", "title": "Vídeo Desktop" },
            "alt": { "type": "string", "title": "Texto alternativo" },
            "link": { "type": "string", "title": "Link" },
          },
        },
        "video3": {
          "type": "object",
          "properties": {
            "mobile": { "type": "string", "title": "Vídeo Mobile" },
            "desktop": { "type": "string", "title": "Vídeo Desktop" },
            "alt": { "type": "string", "title": "Texto alternativo" },
            "link": { "type": "string", "title": "Link" },
          },
        },
      },
    },
    "Banner": {
      "title": "Main Banner",
      "type": "object",
      "required": ["imgSrc", "bannerTexts"],
      "properties": {
        "imgSrc": {
          "type": "object",
          "properties": {
            "mobile": {
              "type": "string",
              "title": "Imagem Mobile",
              "format": "uri",
            },
            "desktop": {
              "type": "string",
              "title": "Imagem Desktop",
              "format": "uri",
            },
          },
        },
        "alt": { "type": "string", "title": "alternate" },
        "text": { "type": "string", "title": "Primeiro texto" },
        "title": { "type": "string", "title": "Título" },
        "subtitle": { "type": "string", "title": "Subtítulo" },
        "CTA": { "type": "string", "title": "Texto CTA do link" },
        "link": { "type": "string", "title": "Link" },
      },
    },
    "BannerGridImages": {
      "title": "Banner Grid",
      "type": "object",
      "required": ["title"],
      "properties": {
        "title": { "type": "string", "title": "Título do grid" },
        "imgBanner1": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
        "imgBanner2": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
        "imgBanner3": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
        "imgBanner4": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
        "imgBanner5": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
        "imgBanner6": {
          "type": "object",
          "properties": {
            "desktop": { "type": "string", "title": "Imagem", "format": "uri" },
            "alt": { "type": "string", "title": "alternate" },
            "link": { "type": "string", "title": "Link da imagem" },
          },
        },
      },
    },
    "BannerImg": {
      "title": "Banner Imagem",
      "type": "object",
      "required": ["imgSrc", "bannerTexts"],
      "properties": {
        "imgSrc": {
          "type": "object",
          "properties": {
            "mobile": {
              "type": "string",
              "title": "Imagem Mobile",
              "format": "uri",
            },
            "desktop": {
              "type": "string",
              "title": "Imagem Desktop",
              "format": "uri",
            },
          },
        },
        "alt": { "type": "string", "title": "alternate" },
        "textColor": { "type": "string", "title": "Cor do texto" },
        "text": { "type": "string", "title": "Primeiro texto" },
        "title": { "type": "string", "title": "Título" },
        "subtitle": { "type": "string", "title": "Subtítulo" },
        "link": { "type": "string", "title": "Link vinculado ao CTA" },
        "CTA": { "type": "string", "title": "Texto do CTA" },
      },
    },
    "Footer": { "title": "Footer", "type": "object", "properties": {} },
    "Head": {
      "type": "object",
      "properties": {
        "title": { "title": "Título da Página", "type": "string" },
        "description": { "title": "Descrição", "type": "string" },
        "faviconUrl": { "title": "Favicon URL", "type": "string" },
        "url": { "title": "URL", "type": "string" },
      },
      "required": ["description", "faviconUrl", "title", "url"],
      "title": "Head (SEO)",
    },
    "Header": { "title": "Header", "type": "object", "properties": {} },
    "HomeFilter": { "title": "HomeFilter", "type": "object", "properties": {} },
    "MarcasConvidadas": {
      "title": "Marcas Convidadas",
      "type": "object",
      "properties": {},
    },
    "Newsletter": { "title": "Newsletter", "type": "object", "properties": {} },
    "ProductDetails": {
      "title": "Product Details",
      "type": "object",
      "properties": { "products": { "$ref": "searchCollections" } },
    },
    "ProductGallery": {
      "title": "Product Gallery",
      "type": "object",
      "required": ["collection"],
      "properties": {
        "products": {
          "$ref": "searchCollections",
          "type": "object",
          "title": "Products",
          "properties": {
            "collection": { "type": "string", "title": "Coleção" },
            "count": { "type": "number", "title": "Num. de itens" },
          },
        },
      },
    },
    "ProductShelf": {
      "title": "Product Shelf",
      "type": "object",
      "required": ["collection"],
      "properties": {
        "title": { "type": "string", "title": "Título" },
        "products": {
          "$ref": "searchCollections",
          "type": "object",
          "title": "Products",
          "properties": {
            "collection": { "type": "string", "title": "Coleção" },
            "count": { "type": "number", "title": "Num. de itens" },
          },
        },
      },
    },
    "StoreFeatures": {
      "title": "StoreFeatures",
      "type": "object",
      "properties": {},
    },
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
