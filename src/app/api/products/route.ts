import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server"

//fetch all products
export const GET = async(req: NextRequest) => {

    const {searchParams} = new URL(req.url); //localhost:3000/api/products

    const cat = searchParams.get("cat"); //search for any categories search params
    // make a request and the endpoint is localhost:3000/api/products?cat="pizzas" 
    //get the value of "cat", here: pizza, able to filt categories based on the value

    try {
        const products = await prisma.product.findMany({
            where: {
                ...(cat ? { catSlug: cat} : {isFeatured: true}),  
                //if there is a "cat", spread this object, if not only take isFeatured 
                //if there's a product: fetch all product, if not: fetch featured products        
            },
        });
        return new NextResponse(
            JSON.stringify(products), 
            {status: 200}
        );
    }catch (err) {
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}), 
            {status: 500}
        );
    }
}