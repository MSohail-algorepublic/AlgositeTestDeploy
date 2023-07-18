import { payloadCloud } from '@payloadcms/plugin-cloud'
import FormBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import redirects from '@payloadcms/plugin-redirects'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import path from 'path'
import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
// collection imports
import Categories from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import Users from './collections/Users'
import BeforeDashboard from './components/BeforeDashboard'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import SecPage from './collections/SecPage'
import { BlogCollection } from './collections/BlogCollection'
import TeamCollection from './collections/TeamCollection'
import { TestimonialCollection } from './collections/testimonialCollection'
import UserForm from './collections/UserForm'
// import UserSubScribtion from './collections/UserScribtion'

console.log('__dirname', __dirname)

dotenv.config({
  path: path.resolve(__dirname, '/.env'),
})

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    components: {
      beforeDashboard: [BeforeDashboard],
    },
  },
  collections: [
    Users,
    Categories,
    Pages,
    Posts,
    Media,
    SecPage,
    BlogCollection,
    TeamCollection,
    TestimonialCollection,
    UserForm,
    // UserSubScribtion,
  ],
  globals: [Header, Footer],
  // build in code.
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    FormBuilder({
      fields: {},
    }),
    nestedDocs({
      collections: ['pages', 'posts', 'categories'],
    }),
    redirects({
      collections: ['pages', 'posts'],
    }),
    seo({
      collections: ['pages', 'posts'],
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
})
