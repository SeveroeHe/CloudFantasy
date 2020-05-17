var gallery_config = {
	"2": "13"
}


function gallery_close() {
	$('#gallery').css("visibility", "hidden");
	$('#gallery-close').css("visibility", "hidden");
}

function gallary(id) {
  $('#gallery').css("visibility", "visible");
  $('#gallery-close').css("visibility", "visible");
  var initial_img = get_image(id, '1');
  $('#gallery-img').attr("src", initial_img);
}

function update(action) {
  var cur_img_id = get_cur_img_id();
  var cur_sec_id = get_cur_gallery_sec();
  var last_img_id = gallery_config[cur_sec_id];
  var updated_id = parseInt(cur_img_id);
  if (action === 'prev') {
  	if (cur_img_id == "1") {
  		updated_id = parseInt(last_img_id);
  	} else{
		updated_id -= 1;
  	}
  } 
  if (action === 'nxt'){
	if (cur_img_id == last_img_id) {
		updated_id = "1";
	} else{
		updated_id += 1;
	}
  }
  var updated_img = get_image(cur_sec_id, updated_id.toString());
  $('#gallery-img').attr("src", updated_img);
  console.log(updated_id);
}


// helper functions

function get_image(gallery_id, img_id) {
	var gallery = "gallery-" + gallery_id;
	var img = gallery + "-" + img_id + ".png"
	return "/static/CloudFantasy/images/bts/" + gallery + "/" + img;
}

function get_cur_gallery_sec() {
	var src = $('#gallery-img').attr("src");
	var cur_img = src.split("/").pop().split(".")[0];
	return cur_img.split("-")[1];
}

function get_cur_img_id() {
	var src = $('#gallery-img').attr("src");
	var cur_img = src.split("/").pop().split(".")[0];
	return cur_img.split("-").pop();
}