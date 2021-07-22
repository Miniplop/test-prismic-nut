import MyComponent from '../../../../slices/GalleryImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/GalleryImage'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"gallery_image","items":[{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Eu consectetur ea sunt aute dolor. Laborum et consequat esse. Consectetur voluptate nostrud pariatur fugiat est velit minim.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"unleash revolutionary partnerships"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Aute ad minim mollit incididunt deserunt deserunt duis. Reprehenderit consectetur quis ad excepteur. Cillum magna consectetur cupidatat in qui fugiat aliqua laborum dolor.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"unleash customized infomediaries"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Tempor duis eiusmod exercitation dolor et consectetur minim magna eu est aliqua commodo ut ea. Fugiat consequat eu in consequat. Quis sunt mollit commodo labore consequat cupidatat Lorem fugiat dolor cupidatat officia laboris laborum.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"seize synergistic networks"}],"primary":{"galleryTitle":[{"type":"heading2","text":"Envisioneer B2B infrastructures","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
