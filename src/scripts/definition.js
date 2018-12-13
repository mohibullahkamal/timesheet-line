import qest from 'json!./template.qext';

export default {
  type: 'items',
  components: 'accordion',
  items: {
    dimentions: {
      uses: 'dimensions',
      min: 1,
      max: 1
    },
    measures: {
      uses: 'measures',
      min: 1,
      max: 1
    },
    settings: {
      uses: 'settings'
    }
  }
};
