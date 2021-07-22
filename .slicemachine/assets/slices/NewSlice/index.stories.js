import MyComponent from '../../../../slices/NewSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/NewSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"new_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Brand robust convergence","spans":[]}],"description":[{"type":"paragraph","text":"Amet aliqua aliqua adipisicing incididunt ullamco esse eu sint eu nostrud sit quis occaecat in deserunt. Veniam pariatur aliquip proident. Lorem deserunt esse consequat fugiat eiusmod magna qui ullamco irure laborum proident excepteur commodo irure laboris.","spans":[]}],"learnMoreButton":{"link_type":"Web","url":"http://twitter.com"},"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
