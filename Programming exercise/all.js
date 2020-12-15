let app = new Vue({
    el:'#app',
    data:{
        data:[],
    },
    created() {
        const vm = this;
        axios.get('https://cors-anywhere.herokuapp.com/https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')
        .then(function (response) {
          console.log(response);
          console.log(vm);
          inform=response.data.XML_Head;
          vm.data =inform.Infos.Info;
            console.log(vm.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
})