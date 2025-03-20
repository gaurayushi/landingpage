import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { debounce } from '../utils/debounce';

const UserShowcase = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const scrollRef = useRef(null);

  // Avatar image URLs
  const avatarImages = [
    "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&h=HMjJqxjKAcbSVSHhXElqvZJ6sBb2CTJ8-MO6QCHcHUo=",
    "https://static.vecteezy.com/system/resources/thumbnails/026/960/074/small_2x/user-member-icon-for-ui-ux-user-interface-or-profile-face-avatar-app-in-circle-design-simple-flat-style-technology-concept-illustration-isolated-on-white-background-eps-10-vector.jpg",
    "https://thumbs.dreamstime.com/b/user-man-avatar-icon-profile-symbol-isolated-web-mobile-eps-177817963.jpg"
  ];

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error('API Error:', err));
  }, []);

  // Auto Scroll
  useEffect(() => {
    const scroll = scrollRef.current;
    const interval = setInterval(() => {
      if (scroll) scroll.scrollLeft += 300;
      if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth) {
        scroll.scrollLeft = 0;
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [filtered]);

  // Search and select logic
  const handleSearch = debounce((query) => {
    if (!query) {
      setFiltered(users);
      setSelectedUser(null);
      return;
    }

    const result = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    if (result.length === 1) {
      setSelectedUser(result[0]);
    } else {
      setSelectedUser(null);
      setFiltered(result);
    }
  }, 300);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 text-center">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800">Team Members</h2>

      {/* Search Bar */}
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search users by name..."
        className="p-3 w-2/3 md:w-1/2 rounded-lg shadow border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-8"
      />

      {/* Show user detail if found */}
      {selectedUser ? (
        <div className="bg-white rounded-xl p-8 shadow-lg mb-10 w-2/3 mx-auto text-left">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedUser.name}</h3>
          <p className="text-gray-600"><span className="font-semibold">Username:</span> {selectedUser.username}</p>
          <p className="text-gray-600"><span className="font-semibold">Email:</span> {selectedUser.email}</p>
          <p className="text-gray-600"><span className="font-semibold">Phone:</span> {selectedUser.phone}</p>
          <p className="text-gray-600"><span className="font-semibold">Company:</span> {selectedUser.company.name}</p>
          <p className="text-gray-600"><span className="font-semibold">Website:</span> {selectedUser.website}</p>
        </div>
      ) : (
        // Carousel with beautiful circular cards
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 snap-x snap-mandatory px-8 scrollbar-hide"
        >
          {filtered.map((user, index) => {
            const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];
            return (
              <div
                key={user.id}
                className={`min-w-[230px] min-h-[230px] 
                  bg-gradient-to-br from-blue-100 via-white to-pink-100 
                  rounded-full p-5 shadow-xl text-center snap-center flex-shrink-0 
                  transition hover:scale-110 flex flex-col items-center justify-center`}
              >
                <img
                  src={randomAvatar}
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full object-cover mb-4 shadow-inner border-4 border-white"
                />
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600 text-xs">{user.company.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default UserShowcase;
