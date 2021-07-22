import MyComponent from '../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
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
      mock: {"variation":"default-slice","name":"oneColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Consequat sint commodo culpa cillum minim irure exercitation. Pariatur enim sunt ullamco. Et ex ut veniam reprehenderit sit pariatur cupidatat ex sit veniam deserunt velit cupidatat nostrud.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'oneColumn'

export const _TwoColumn = () => ({
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
      mock: {"variation":"twoColumn","name":"twoColumn","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"heading2","text":"Maximize cutting-edge mindshare","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"}},"id":"_TwoColumn"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_TwoColumn.storyName = 'twoColumn'
