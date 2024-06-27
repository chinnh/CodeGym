class soTietKiem{
    so;
    listSo;
    constructor(soInput) {
        this.so = soInput;
        this.listSo = [];
    }
    addSo(newSo){
        this.listSo.push(newSo);
    }
    removeSo(index){        
        this.listSo.splice(index, 1);
    }
    getSo(index){
        let product = this.listSo[index];
        return product;
    }
    update(index, newSo) {
        this.listSo[index] = newSo;
      }
}