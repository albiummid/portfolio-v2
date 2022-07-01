import React from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import CodeTool from '@editorjs/code'
import Table from '@editorjs/table'
import { SimpleImage } from '@editorjs/simple-image'

import ImageTool from '@editorjs/image'
import { useEffect } from 'react'
import { useState } from 'react'

export default function BlogEditor() {
  const [mounted, setMounted] = useState(null)
  const editorCaller = () => {
    const editor =
      typeof window !== 'undefined' &&
      new EditorJS({
        holder: 'editorjs',
        tools: {
          header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4, 5, 6],
              defaultLevel: 3,
            },
          },

          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: "Quote's author",
            },
          },

          //   Marker: {
          //     class: Marker,
          //     shortcut: 'CMD+SHIFT+M',
          //   },
          code: CodeTool,
          //   list: List,
          //   checklist: Checklist,
          //   warning: Warning,
          //   delimiter: Delimiter,
          //   inlineCode: InlineCode,
          //   linkTool: LinkTool,
          //   embed: {
          //     class: Embed,
          //     config: {
          //       services: {
          //         youtube: true,
          //         coub: true,
          //         codepen: true,
          //       },
          //     },
          //   },
          table: Table,
        },
        image: SimpleImage,
        //       image: {
        //   class: ImageTool,
        //   config: {
        //     /**
        //      * Custom uploader
        //      */
        //     uploader: {
        //       /**
        //        * Upload file to the server and return an uploaded image data
        //        * @param {File} file - file selected from the device or pasted by drag-n-drop
        //        * @return {Promise.<{success, file: {url}}>}
        //        */
        //       uploadByFile(file){
        //         // your own uploading logic here
        //         return MyAjax.upload(file).then(() => {
        //           return {
        //             success: 1,
        //             file: {
        //               url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
        //               // any other image data you want to store, such as width, height, color, extension, etc
        //             }
        //           };
        //         });
        //       },

        //       /**
        //        * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
        //        * @param {string} url - pasted image URL
        //        * @return {Promise.<{success, file: {url}}>}
        //        */
        //       uploadByUrl(url){
        //         // your ajax request for uploading
        //         return MyAjax.upload(file).then(() => {
        //           return {
        //             success: 1,
        //             file: {
        //               url: 'https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg',
        //               // any other image data you want to store, such as width, height, color, extension, etc
        //             }
        //           }
        //         })
        //       }
        //     }
        //   }
        // },
      })
  }

  useEffect(() => {
    editorCaller()
  }, [])

  return (
    <div>
      <p>Blog Editor</p>
      <div id='editorjs' />
    </div>
  )
}
