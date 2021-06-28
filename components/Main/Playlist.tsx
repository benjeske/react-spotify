import usePlaylist from "hooks/usePlaylist";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  id: string;
}

export default function Playlist({ id }: Props) {
  let playlist = usePlaylist(id);

  return (
    <div>
      <div className="w-full h-64 flex justify-start p-4 ml-4 text-white">
        <div className="h-full mr-8 w-1/7">
          <Image
            layout="responsive"
            height="64"
            width="64"
            src={playlist?.image || "/images/test.jpeg"}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between my-4">
          <div className="text-sm">Playlist</div>
          <div>
            <div className="text-7xl font-extrabold">{playlist?.name}</div>
            <div className="text-gray-300 text-sm mt-3">
              {playlist?.description}
            </div>
          </div>
          <div className="flex text-sm">
            <div className="font-bold">Spotify</div>
          </div>
        </div>
      </div>

      <div className="text-gray-400 mx-8 text-sm">
        <div className="w-full flex pr-8 py-4 border-b border-gray-500">
          <div className="w-5/12 flex">
            <div className="w-1/7 text-center">#</div>
            <div>TIÊU ĐỀ</div>
          </div>
          <div className="w-4/12">ALBUM</div>
          <div className="w-1/12">NGÀY THÊM</div>
          <div className="w-2/12 flex justify-end">
            <svg width="1em" height="1em" viewBox="0 0 256 256">
              <path
                d="M128 230a102 102 0 1 1 102-102a102.115 102.115 0 0 1-102 102zm0-192a90 90 0 1 0 90 90a90.102 90.102 0 0 0-90-90zm62 90a6 6 0 0 0-6-6h-50V72a6 6 0 0 0-12 0v56a6 6 0 0 0 6 6h56a6 6 0 0 0 6-6z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        {playlist?.tracks.map((track, index) => (
          <div
            key={track.id}
            className="w-full flex items-center pr-8 py-2 my-2 hover:bg-white hover:bg-opacity-10 rounded"
          >
            <div className="w-5/12 flex items-center pr-8">
              <div className="w-1/7 text-center">{index + 1}</div>
              <div className="w-6/7 flex">
                <div className="w-1/12">
                  <div className="w-full">
                    <Image
                      layout="responsive"
                      height="64"
                      width="64"
                      src={track.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-11/12 pl-3">
                  <div className="text-white text-base whitespace-nowrap overflow-hidden overflow-ellipsis">{track.name}</div>
                  <div className="text-xs">
                    {track.artists.map((artist) => artist.name).join(", ")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">{track.album.name}</div>
            <div className="w-1/12">{`${new Date(
              track.added_at
            ).getDate()} thg ${new Date(track.added_at).getMonth()}, ${new Date(
              track.added_at
            ).getFullYear()}`}</div>
            <div className="w-2/12 text-right">2:49</div>
          </div>
        ))}
      </div>
    </div>
  );
}
