"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "./label";
import { Button } from "./button";
import {
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  Tag,
  Twitter,
} from "lucide-react";
import { Badge } from "./badge";
import { Separator } from "./separator";

const Profile2 = () => {
  return (
    <Card className="">
      <CardHeader className="p-0 px-3 py-3">
        <div className="flex space-x-4 items-center   justify-center">
          <Avatar className=" w-24 h-24">
            <AvatarImage src="https://github.com/aziz-codes.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-400 text-xs">johndoe</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-0 px-3 py-3 items-center  ">
        {/* <div className="line-clamp-6 mb-3 bg-red-500">
          Frontend Web Developer, can read something really nakaf
          knfwennkfnkknewk
        </div> */}
        <div className="flex items-center space-x-4 py-2">
          <div className="flex-col">
            <label>Followers</label>
            <h4 className="font-bold text-center">78.3k</h4>
          </div>
          <Separator orientation="vertical" className="h-8" />
          <div className="flex-col">
            <label>Following</label>
            <h4 className="font-bold text-center">2.3k</h4>
          </div>
        </div>
        <Button
          size="sm"
          className="w-full bg-[#A1D6E2] mb-3 !ring-0 !outline-none   max-w-[200px] text-[#1995AD] hover:bg-[#1995AD] hover:text-[white]"
        >
          Follow
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile2;
