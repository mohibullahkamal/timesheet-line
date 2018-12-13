import qest from 'json!./template.qext';

export default {
  type: 'items',
  components: 'accordion',
  items: {
    dimentions: {
      uses: 'dimensions'
    },
    measures: {
      uses: 'measures'
    },
    settings: {
      uses: 'settings'
    }
  }
};
