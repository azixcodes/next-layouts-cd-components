"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
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
import { Badge } from "./ui/badge";

const Profile = () => {
  return (
    <Card className="">
      <CardHeader className="p-0 px-3 py-3">
        <div className="grid grid-cols-12 items-center gap-3">
          <div className="col-span-6 flex xl:justify-end">
            <Avatar className="  w-24 h-24">
              <AvatarImage src="https://github.com/aziz-codes.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col col-span-6">
            <h4 className="font-semibold">Aziz</h4>
            <p className="text-gray-400 text-xs">azizcodes</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-0 px-3 pb-3 xl:items-center">
        <Label className="line-clamp-6 mb-3">Frontend Web Developer</Label>
        <Button
          size="sm"
          className="w-full bg-[#A1D6E2] mb-3 !ring-0 !outline-none   max-w-xs text-[#1995AD] hover:bg-[#1995AD] hover:text-[white]"
        >
          Edit Profile
        </Button>
        <div className="grid grid-cols-12 items-center xl:ml-10 font-[300] text-xs gap-4">
          <MapPin className="col-span-1 w-4" stroke="gray" />
          <div className="col-span-11 ">
            <Label className="block text-gray-400 text-xs font-[500] w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              Pakistan
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-12  items-center gap-4 xl:ml-10  group xl:items-center">
          <Globe className="col-span-1 w-4 text-gray-400 group-hover:text-black" />
          <div className="col-span-11 ">
            <Label className="block text-xs font-[500] text-gray-400 group-hover:text-black group-hover:cursor-pointer w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              https://www.currenttick.info
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-12  items-center gap-4 xl:ml-10 group">
          <Github className="col-span-1 w-4 text-gray-400 group-hover:text-black" />
          <div className="col-span-11 ">
            <Label className="block text-xs font-[500] text-gray-400 group-hover:text-black group-hover:cursor-pointer w-full max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              aziz-codes
            </Label>
          </div>
        </div>
        <div className="grid grid-cols-12  items-center gap-4 xl:ml-10 group ">
          <Tag className="col-span-1 w-4 text-gray-400  -rotate-90" />
          <div className="col-span-11 flex gap-2 flex-wrap ">
            <Badge variant="outline" className="!text-[9px]">
              HTML5
            </Badge>
            <Badge variant="outline" className="!text-[9px]">
              React
            </Badge>
            <Badge variant="outline" className="!text-[9px]">
              C++
            </Badge>
            <Badge variant="outline" className="!text-[9px]">
              Python
            </Badge>
            <Badge variant="outline" className="!text-[9px]">
              Angular
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
