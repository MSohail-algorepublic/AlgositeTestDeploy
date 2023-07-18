/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    categories: Category
    pages: Page
    posts: Post
    media: Media
    forms: Form
    redirects: Redirect
  }
  globals: {
    header: Header
    footer: Footer
  }
}
export interface User {
  id: string
  name?: string
  roles?: Array<'admin' | 'user'>
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  loginAttempts?: number
  lockUntil?: string
  createdAt: string
  updatedAt: string
  password?: string
}
export interface Category {
  id: string
  title?: string
  parent?: string | Category
  breadcrumbs: Array<{
    doc?: string | Category
    url?: string
    label?: string
    id?: string
  }>
  createdAt: string
  updatedAt: string
}
export interface Page {
  id: string
  title: string
  publishedDate?: string
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact'
    richText: Array<{
      [k: string]: unknown
    }>
    links: Array<{
      link: {
        type?: 'reference' | 'custom'
        newTab?: boolean
        reference: {
          value: string | Page
          relationTo: 'pages'
        }
        url: string
        label: string
        appearance?: 'default' | 'primary' | 'secondary'
      }
      id?: string
    }>
    media: string | Media
  }
  layout: Array<
    | {
        ctaBackgroundColor?: 'white' | 'black'
        richText: Array<{
          [k: string]: unknown
        }>
        links: Array<{
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              value: string | Page
              relationTo: 'pages'
            }
            url: string
            label: string
            appearance?: 'primary' | 'secondary'
          }
          id?: string
        }>
        id?: string
        blockName?: string
        blockType: 'cta'
      }
    | {
        backgroundColor?: 'white' | 'black'
        columns: Array<{
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
          richText: Array<{
            [k: string]: unknown
          }>
          enableLink?: boolean
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              value: string | Page
              relationTo: 'pages'
            }
            url: string
            label: string
            appearance?: 'default' | 'primary' | 'secondary'
          }
          id?: string
        }>
        id?: string
        blockName?: string
        blockType: 'content'
      }
    | {
        form: string | Form
        enableIntro?: boolean
        introContent: Array<{
          [k: string]: unknown
        }>
        id?: string
        blockName?: string
        blockType: 'formBlock'
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black'
        position?: 'default' | 'fullscreen'
        media: string | Media
        id?: string
        blockName?: string
        blockType: 'mediaBlock'
      }
    | {
        introContent: Array<{
          [k: string]: unknown
        }>
        populateBy?: 'collection' | 'selection'
        relationTo?: 'pages'
        categories?: string[] | Category[]
        limit?: number
        selectedDocs?:
          | Array<
              | {
                  value: string
                  relationTo: 'pages'
                }
              | {
                  value: string
                  relationTo: 'posts'
                }
            >
          | Array<
              | {
                  value: Page
                  relationTo: 'pages'
                }
              | {
                  value: Post
                  relationTo: 'posts'
                }
            >
        populatedDocs?:
          | Array<
              | {
                  value: string
                  relationTo: 'pages'
                }
              | {
                  value: string
                  relationTo: 'posts'
                }
            >
          | Array<
              | {
                  value: Page
                  relationTo: 'pages'
                }
              | {
                  value: Post
                  relationTo: 'posts'
                }
            >
        populatedDocsTotal?: number
        id?: string
        blockName?: string
        blockType: 'archive'
      }
  >
  slug?: string
  parent?: string | Page
  breadcrumbs: Array<{
    doc?: string | Page
    url?: string
    label?: string
    id?: string
  }>
  meta: {
    title?: string
    description?: string
    image?: string | Media
  }
  _status?: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}
export interface Media {
  id: string
  alt: string
  caption?: Array<{
    [k: string]: unknown
  }>
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  createdAt: string
  updatedAt: string
}
export interface Form {
  id: string
  title: string
  fields: Array<
    | {
        name: string
        label?: string
        width?: number
        defaultValue?: string
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'text'
      }
    | {
        name: string
        label?: string
        width?: number
        defaultValue?: string
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'textarea'
      }
    | {
        name: string
        label?: string
        width?: number
        defaultValue?: string
        options: Array<{
          label: string
          value: string
          id?: string
        }>
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'select'
      }
    | {
        name: string
        label?: string
        width?: number
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'email'
      }
    | {
        name: string
        label?: string
        width?: number
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'state'
      }
    | {
        name: string
        label?: string
        width?: number
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'country'
      }
    | {
        name: string
        label?: string
        width?: number
        defaultValue?: number
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'number'
      }
    | {
        name: string
        label?: string
        width?: number
        required?: boolean
        defaultValue?: boolean
        id?: string
        blockName?: string
        blockType: 'checkbox'
      }
    | {
        message?: Array<{
          [k: string]: unknown
        }>
        id?: string
        blockName?: string
        blockType: 'message'
      }
    | {
        name: string
        label?: string
        width?: number
        basePrice?: number
        priceConditions: Array<{
          fieldToUse?: string
          condition?: 'hasValue' | 'equals' | 'notEquals'
          valueForCondition?: string
          operator?: 'add' | 'subtract' | 'multiply' | 'divide'
          valueType?: 'static' | 'valueOfField'
          valueForOperator?: string
          id?: string
        }>
        required?: boolean
        id?: string
        blockName?: string
        blockType: 'payment'
      }
  >
  submitButtonLabel?: string
  confirmationType?: 'message' | 'redirect'
  confirmationMessage: Array<{
    [k: string]: unknown
  }>
  redirect: {
    url: string
  }
  emails: Array<{
    emailTo?: string
    cc?: string
    bcc?: string
    replyTo?: string
    emailFrom?: string
    subject: string
    message?: Array<{
      [k: string]: unknown
    }>
    id?: string
  }>
  createdAt: string
  updatedAt: string
}
export interface Post {
  id: string
  title: string
  publishedDate?: string
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact'
    richText: Array<{
      [k: string]: unknown
    }>
    links: Array<{
      link: {
        type?: 'reference' | 'custom'
        newTab?: boolean
        reference: {
          value: string | Page
          relationTo: 'pages'
        }
        url: string
        label: string
        appearance?: 'default' | 'primary' | 'secondary'
      }
      id?: string
    }>
    media: string | Media
  }
  layout: Array<
    | {
        ctaBackgroundColor?: 'white' | 'black'
        richText: Array<{
          [k: string]: unknown
        }>
        links: Array<{
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              value: string | Page
              relationTo: 'pages'
            }
            url: string
            label: string
            appearance?: 'primary' | 'secondary'
          }
          id?: string
        }>
        id?: string
        blockName?: string
        blockType: 'cta'
      }
    | {
        backgroundColor?: 'white' | 'black'
        columns: Array<{
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full'
          richText: Array<{
            [k: string]: unknown
          }>
          enableLink?: boolean
          link: {
            type?: 'reference' | 'custom'
            newTab?: boolean
            reference: {
              value: string | Page
              relationTo: 'pages'
            }
            url: string
            label: string
            appearance?: 'default' | 'primary' | 'secondary'
          }
          id?: string
        }>
        id?: string
        blockName?: string
        blockType: 'content'
      }
    | {
        form: string | Form
        enableIntro?: boolean
        introContent: Array<{
          [k: string]: unknown
        }>
        id?: string
        blockName?: string
        blockType: 'formBlock'
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black'
        position?: 'default' | 'fullscreen'
        media: string | Media
        id?: string
        blockName?: string
        blockType: 'mediaBlock'
      }
    | {
        introContent: Array<{
          [k: string]: unknown
        }>
        populateBy?: 'collection' | 'selection'
        relationTo?: 'pages'
        categories?: string[] | Category[]
        limit?: number
        selectedDocs?:
          | Array<
              | {
                  value: string
                  relationTo: 'pages'
                }
              | {
                  value: string
                  relationTo: 'posts'
                }
            >
          | Array<
              | {
                  value: Page
                  relationTo: 'pages'
                }
              | {
                  value: Post
                  relationTo: 'posts'
                }
            >
        populatedDocs?:
          | Array<
              | {
                  value: string
                  relationTo: 'pages'
                }
              | {
                  value: string
                  relationTo: 'posts'
                }
            >
          | Array<
              | {
                  value: Page
                  relationTo: 'pages'
                }
              | {
                  value: Post
                  relationTo: 'posts'
                }
            >
        populatedDocsTotal?: number
        id?: string
        blockName?: string
        blockType: 'archive'
      }
  >
  slug?: string
  parent?: string | Post
  breadcrumbs: Array<{
    doc?: string | Post
    url?: string
    label?: string
    id?: string
  }>
  meta: {
    title?: string
    description?: string
    image?: string | Media
  }
  _status?: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}
export interface FormSubmission {
  id: string
  form: string | Form
  submissionData: Array<{
    field: string
    value: string
    id?: string
  }>
  payment: {
    field?: string
    status?: string
    amount?: number
    paymentProcessor?: string
    creditCard: {
      token?: string
      brand?: string
      number?: string
    }
  }
  createdAt: string
  updatedAt: string
}
export interface Redirect {
  id: string
  from: string
  to: {
    type?: 'reference' | 'custom'
    reference:
      | {
          value: string | Page
          relationTo: 'pages'
        }
      | {
          value: string | Post
          relationTo: 'posts'
        }
    url: string
  }
  createdAt: string
  updatedAt: string
}
export interface Header {
  id: string
  navItems: Array<{
    link: {
      type?: 'reference' | 'custom'
      newTab?: boolean
      reference: {
        value: string | Page
        relationTo: 'pages'
      }
      url: string
      label: string
    }
    id?: string
  }>
}
export interface Footer {
  id: string
  navItems: Array<{
    link: {
      type?: 'reference' | 'custom'
      newTab?: boolean
      reference: {
        value: string | Page
        relationTo: 'pages'
      }
      url: string
      label: string
    }
    id?: string
  }>
}
