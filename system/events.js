document.querySelector("#btn_create_clt").addEventListener("click", function(){
    let color=document.querySelector("#slc_category").value;
    let mtr=document.querySelector("#slc_material").value;
    const categories=[all_sprites,w_sprites,m_sprites,c_sprites,y_sprites,o_sprites]

    clothes.push(new Cloth({x: 100, y: 475}, 70,categories[color],mtr))

})