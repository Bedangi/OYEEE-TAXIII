const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  user: 'SYSTEM',
  password: 'Bedanagi1!',
  connectString: 'localhost:1521/xe'
};

// GET endpoint to fetch all customers
app.get('/customers', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
    `SELECT * FROM Customer`);
    res.json(result.rows); // Send rows to frontend
  } catch (err) {
    console.error('Error fetching customer data:', err);
    res.status(500).json({ error: 'Failed to fetch customer data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// GET all drivers
app.get('/drivers', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
    `SELECT 
    d.driver_id as di,
    d.name as dn,
    d.license_number as ln,
    d.rating as r,
    d.total_rides as tr,
    (
        SELECT MIN(dp.phone_number) 
        FROM DriverPhone dp 
        WHERE dp.driver_id = d.driver_id
    ) AS phone
FROM 
    Driver d
ORDER BY 
    d.driver_id`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching driver data:', err);
    res.status(500).json({ error: 'Failed to fetch driver data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// GET all cabs
app.get('/cabs', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM Cab');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching cab data:', err);
    res.status(500).json({ error: 'Failed to fetch cab data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// GET all bookings
app.get('/bookings', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM Booking');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching booking data:', err);
    res.status(500).json({ error: 'Failed to fetch booking data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});  

//ride hist
app.get('/ride-history', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM RideHistory');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching ride data:', err);
    res.status(500).json({ error: 'Failed to fetch ride data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});  

//ride loc
app.get('/ride-locations', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM RideLocations');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching ride data:', err);
    res.status(500).json({ error: 'Failed to fetch ride data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});  

//payment
app.get('/payments', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM Payment');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching payment data:', err);
    res.status(500).json({ error: 'Failed to fetch payment data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});  
// StopPoolingPoints
app.get('/stop-pooling-points', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM StopPoolingPoints');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching StopPoolingPoints data:', err);
    res.status(500).json({ error: 'Failed to fetch StopPoolingPoints data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// RidePoolingAssignments
app.get('/ride-pooling-assignments', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM RidePoolingAssignments');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching RidePoolingAssignments data:', err);
    res.status(500).json({ error: 'Failed to fetch RidePoolingAssignments data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// LoyaltyPoints
app.get('/loyalty-points', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM LoyaltyPoints');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching LoyaltyPoints data:', err);
    res.status(500).json({ error: 'Failed to fetch LoyaltyPoints data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// LoyaltyTransactions
app.get('/loyalty-transactions', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
    `SELECT 
    lt.transaction_id as ti,
    c.customer_id,
    c.name AS cn,
    lt.points_earned as pe,
    lt.points_redeemed as pr,
    lt.transaction_date as td
FROM 
    LoyaltyTransactions lt
JOIN 
    Customer c ON lt.customer_id = c.customer_id
ORDER BY 
    lt.transaction_date DESC`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching LoyaltyTransactions data:', err);
    res.status(500).json({ error: 'Failed to fetch LoyaltyTransactions data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

// GET total DashboardBookings
app.get('/dashboardBookings', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT Count(*) as Count FROM Booking');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 

// GET total DashboardDrivers
app.get('/dashboardDrivers', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT Count(*) as Count FROM Driver');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 

// GET total DashboardCabs
app.get('/dashboardCabs', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT Count(*) as Count FROM Cab');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 

// GET total DashboardCarpools
app.get('/dashboardCarpools', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute("SELECT Count(*) as Count FROM Booking WHERE is_carpool = 'Y' ");
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 

// GET max DashboardPoints
app.get('/dashboardPoints', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT MAX(total_points) as max FROM LoyaltyPoints');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 

// GET total DashboardRevenue
app.get('/dashboardRevenue', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT SUM(fare) AS fare FROM Booking');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contact data:', err);
    res.status(500).json({ error: 'Failed to fetch contact data' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}); 


// Root route (optional)
app.get('/', (req, res) => {
res.send('Welcome to the Taxi API');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
