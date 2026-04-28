'use client';

import { STATS, MOCK_PRODUCTS, RECENT_ACTIVITY, DEMO_USER } from '@/lib/data';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import CardHeader from '@/components/ui/CardHeader';
import CardTitle from '@/components/ui/CardTitle';
import CardContent from '@/components/ui/CardContent';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';

const DashboardPage = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Good morning, {DEMO_USER.name}! Today is {currentDate}
      </h1>
      <div className="flex space-x-4 mb-8">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-left table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PRODUCTS.slice(0, 10).map((product, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.description}</td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2">
                        <Badge variant={product.status === 'active' ? 'success' : 'warning'}>{product.status}</Badge>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">View</button>
                        <button className="text-blue-500 hover:text-blue-700 ml-2">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.slice(0, 10).map((activity, index) => (
                  <li key={index} className="py-2 border-b border-gray-200">
                    <Avatar initials={activity.user.initials} />
                    <span className="ml-2">{activity.action}</span>
                    <span className="text-gray-500 ml-2">{activity.timeAgo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Product</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Notification</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Reports</button>
      </div>
    </div>
  );
};

export default DashboardPage;