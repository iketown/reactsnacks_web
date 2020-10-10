import•React,•{•useState•}•from•"react";
//•same•as•React.useState
export•const•ColorPicker•=•()•=>•{
••const•[color,•setColor]•=•useState("blue");

••return•(
••••<div>
••••••<h2>the•color•is•{color}</h2>
••••••<button•onClick={()•=>•setColor("red")}>RED</button>
••••••<button•onClick={()•=>•setColor("blue")}>BLUE</button>
••••</div>
••);
};
