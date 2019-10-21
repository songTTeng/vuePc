import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers = config.headers? config.headers: {}
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status == 200){
        let res = response.data;
        if(res.returnCode && res.returnMessage) {
            return res;
        }
    }else if(response.status == 403){
        //如果有需要添加自己想加的操作
        console.log("403")
    }else if(response.status >= 500 && response.status < 600){
        this.$message.error({message:"系统繁忙"})
    }else{
       
    }
}, function (error) {
    if(error.response.status == 403){  
       //如果有需要添加自己想加的操作
       console.log("403")
    }else if(error.response.status >= 500&&error.response.status<600){
        //如果有需要添加自己想加的操作
    }else{
        // 对响应错误做点什么
        return Promise.reject(error);
    }
});

// 文件上传的封装
function postFile(json){
    var f = document.createElement('form');
    f.method = "post";
    f.enctype = "multipart/form-data";
    f.style.display = "none";
    var f_in = {};
    if(json.data){
        for(var i in json.data){
            f_in[i] = document.createElement('input');
            f_in[i].name = i;
            f_in[i].value = json.data[i];
            f.appendChild(f_in[i]);
        }
    }
    var f_i = document.createElement('input');
    f_i.type = "file";
    f_i.name = json.fileName||'file';
    f_i.accept = json.accept||'';
    if(json.multiple){
        f_i.multiple = "multiple";
    }
    (function(json){
        f_i.onchange = function(){
            axios({
                url:json.url,
                method:'post',
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: function() {
                    var D_ata = new FormData(f);
                    return D_ata
                }
            }).then(function(data){
                data.ykf_e_file = f_i.files[0];
                document.body.removeChild(f);
                json.success&&json.success(data);
            },e => {
                json.error&&json.error(e)
            })
        }
    })(json)
    f.appendChild(f_i);
    document.body.appendChild(f);
    f_i.click();
}
// 这是用法
// this.$postFile({
//     url: 'iscportal/fileupdown/uploadBusiFileToRnfs',
//     data: {
//         fileName: 'test1',
//         sourceCode: 'test'
//     },
//     success: function(json){
//         console.log(json)
//     }
// })

// form表单上传的封装
function postForm(json){
    var f = document.createElement('form');
    f.method = "post";
    f.enctype = "multipart/form-data";
    f.style.display = "none";
    var f_in = {};
    if(json.data){
        for(var i in json.data){
            f_in[i] = document.createElement('input');
            f_in[i].name = i;
            f_in[i].value = json.data[i];
            f.appendChild(f_in[i]);
        }
    }
    var f_i = json.file.cloneNode();
    f_i.files = json.file.files;
    f.appendChild(f_i);
    try{
        var f_is = json.multipartFiles.cloneNode();
        f_is.files = json.multipartFiles.files;
        f.appendChild(f_is);
    }catch(e){
    }
    document.body.appendChild(f);
    return axios({
        url:json.url,
        method:'post',
        headers: {
            'Content-Type': undefined
        },
        transformRequest: function() {
            var D_ata = new FormData(f);
            return D_ata
        }
    })
}
export default {
    install: (Vue, options) => {   
        Vue.prototype.Http = axios
        Vue.prototype.$postFile = postFile
        Vue.prototype.$postForm = postForm
    }
}

const Http = axios
export {Http, postFile, postForm}